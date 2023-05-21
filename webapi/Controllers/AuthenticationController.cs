using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using webapi.DAL;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly DipendentiDBContext _context;
        private readonly ILogger<DipendenteController> _logger;

        public AuthenticationController(IConfiguration config, DipendentiDBContext dbContext, ILogger<DipendenteController> logger)
        {
            _config = config;
            _context = dbContext;
            _logger = logger;

        }

        [AllowAnonymous]
        [HttpPost("registrazione")]
        public IActionResult Registrazione(Utente utente)
        {
            // Check if the username already exists
            if (_context.Utenti.Any(u => u.Username == utente.Username))
            {
                return Conflict("Username already exists");
            }

            // Create a new user
            var newUtente = new Utente
            {
                Username = utente.Username,
                Password = utente.Password
            };

            // Add the user to the database
            _context.Utenti.Add(newUtente);
            _context.SaveChanges();

            // Generate a JWT token
            var token = GenerateJwtToken(newUtente.Username);
            return Ok(new { token });
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login(Utente model)
        {
            // Check if the user exists and the password is correct
            var user = _context.Utenti.SingleOrDefault(u => u.Username == model.Username && u.Password == model.Password);
            if (user == null)
            {
                return Unauthorized("Invalid username or password");
            }

            // Generate a JWT token
            var token = GenerateJwtToken(user.Username);
            return Ok(new { token });
        }
        private string GenerateJwtToken(string username)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("KaPdRgUkXp2s5v8y/B?E(H+MbQeThVmYq3t6w9z$C&F)J@NcRfUjXnZr4u7x!A%D*G-KaPdSgVkYp3s5v8y/B?E(H+MbQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r5u8x/A%D*G-KaPdSgVkYp3s6v9y$B&E(H+MbQeThWmZq4t7w!z%C*F-J@NcRfUjXn2r5u8x/A?D(G+KbPdSgVkYp3s6v9y$B&E)H@McQfThWmZq4t7w!z%C*F-JaNdRgUkXn2");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, username)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

    }
    
}

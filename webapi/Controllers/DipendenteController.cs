using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.DAL;
using webapi.Models;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class DipendenteController : ControllerBase
{
    private readonly DipendentiDBContext _context;
    private readonly ILogger<DipendenteController> _logger;
    public DipendenteController(DipendentiDBContext context, ILogger<DipendenteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var dipendenti = await _context.Dipendenti.ToListAsync();
        return Ok(dipendenti);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var dipendente = await _context.Dipendenti.FindAsync(id);
        if (dipendente == null)
        {
            return NotFound();
        }
        return Ok(dipendente);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Dipendente dipendente)
    {
        _context.Dipendenti.Add(dipendente);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = dipendente.Id }, dipendente);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Dipendente dipendente)
    {
        if (id != dipendente.Id)
        {
            return BadRequest();
        }
        _context.Entry(dipendente).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!DipendenteExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
        return NoContent();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var dipendente = await _context.Dipendenti.FindAsync(id);
        if (dipendente == null)
        {
            return NotFound();
        }
        _context.Dipendenti.Remove(dipendente);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    private bool DipendenteExists(int id)
    {
        return _context.Dipendenti.Any(d => d.Id == id);
    }
}
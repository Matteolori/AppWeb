using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.DAL;

public class DipendentiDBContext: DbContext
{
    public DbSet<Dipendente> Dipendenti { get; set; }
    public DipendentiDBContext(DbContextOptions<DipendentiDBContext> options)
        : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Dipendente>()
            .HasKey(p => p.Id);
    }
}
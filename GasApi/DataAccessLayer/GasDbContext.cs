using DataAccessLayer.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer;
public class GasDbContext : DbContext
{
	public GasDbContext(DbContextOptions<GasDbContext> options)
		: base(options)
	{

	}

	public DbSet<Rate> Rates { get; set; }
	public DbSet<CommunalPayment> CommunalPayments { get; set; }

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder.Entity<Rate>().HasData(new Rate { Id = 1, Name = "Економ", Price = 7.96m },
			new Rate { Id = 2, Name = "Фіксований", Price = 8.96m },
			new Rate { Id = 3, Name = "Преміум", Price = 9.96m });

		modelBuilder.Entity<CommunalPayment>()
			  .HasIndex(cp => new { cp.StartDate, cp.EndDate , cp.UserId })
			  .IsUnique();
	}

}

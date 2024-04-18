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

}

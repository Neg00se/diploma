using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Entities;

public class CommunalPayment 
{
    public int Id { get; set; }

    public DateOnly StartDate { get; set; }

	public DateOnly EndDate { get; set; }

	public string UserCode { get; set; } = null!;

	public string UserId { get; set; }

	public decimal GasUsed { get; set; }

	public decimal ToPay { get; set; }

	public decimal Payed { get; set; }

	public bool IsPayed { get; set; }

	public Rate Rate { get; set; } = null!;

    public int RateId { get; set; }
}

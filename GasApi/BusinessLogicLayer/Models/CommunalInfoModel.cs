using DataAccessLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Models;

public class CommunalInfoModel
{
	public int Id { get; set; }

	public DateOnly StartDate { get; set; }

	public DateOnly EndDate { get; set; }

	public decimal GasUsed { get; set; }

	public decimal ToPay { get; set; }
	
	public decimal Payed { get; set; } = default!;

	public bool IsPayed { get; set; }

	public int RateId { get; set; }

	public string RateName { get; set; }

	public decimal RatePrice { get; set; }
}

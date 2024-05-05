using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.IdentityItems;

public class User : IdentityUser
{

	public string FirstName { get; set; }

	public string LastName { get; set; }

	[MaxLength(9)]
	[MinLength(9)]
	public string PersonalCode { get; set; }

    public int RateId { get; set; }

    public string? Address { get; set; }

}
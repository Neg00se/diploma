﻿using DataAccessLayer.IdentityItems;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer;

public class AppIdentityDbContext : IdentityDbContext<User>
{
	public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : base(options)
	{

	}

}

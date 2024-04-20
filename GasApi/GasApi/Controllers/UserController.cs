using DataAccessLayer.IdentityItems;
using GasApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GasApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly UserManager<User> _userManager;
		private readonly SignInManager<User> _signInManager;

		public UserController(UserManager<User> userManager, SignInManager<User> signInManager)
		{
			_userManager = userManager;
			_signInManager = signInManager;
		}

		[HttpPost("register")]
		public async Task<IActionResult> Register(RegisterModel model)
		{
			User user = new()
			{
				UserName = model.Email,
				FirstName = model.FirstName,
				LastName = model.LastName,
				Email = model.Email,
				PersonalCode = model.PersonalCode,
				Address = model.Address,
				PhoneNumber = model.Phone
			};

			var result = await _userManager.CreateAsync(user, model.Password);
			

			if (result.Succeeded)
			{
				await _userManager.AddToRoleAsync(user, "User");
				return Ok("Registration is successfull");
			}

			return BadRequest("Something went wrong");
		}

	}
}

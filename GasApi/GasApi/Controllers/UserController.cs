using BusinessLogicLayer.Services;
using DataAccessLayer.IdentityItems;
using GasApi.DataSeed;
using GasApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace GasApi.Controllers
{
	[Route("api/[controller]")]
	[Authorize]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly UserManager<User> _userManager;
		private readonly IUserService _userService;
		private readonly ICommunalPaymentService _cpService;

		public UserController(UserManager<User> userManager,
						SignInManager<User> signInManager,
						IUserService userService,
						ICommunalPaymentService cpService)
		{
			_userManager = userManager;
			_userService = userService;
			_cpService = cpService;
		}

		[HttpPost("register")]
		[AllowAnonymous]
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
			user.RateId = await _userService.GetUserDefaultRandomRateId();

			var result = await _userManager.CreateAsync(user, model.Password);


			if (result.Succeeded)
			{
				user = await _userManager.FindByNameAsync(user.UserName);
				await _userManager.AddToRoleAsync(user, "User");
				await _cpService.AddRandomUserCommunals(user);
				return Ok("Registration is successfull");
			}

			
			return BadRequest(result.Errors);
		}

		
		[HttpGet("profile")]
		public async Task<IActionResult> UserProfile()
		{
			try
			{
				var user = await _userService.GetUserInfo(User);
				return Ok(user);

			}
			catch (Exception ex)
			{

				return BadRequest(ex.Message);
			}
		}

		[HttpGet("userRate")]
		public async Task<IActionResult> UserPlan()
		{
			try
			{
				var plan =await _userService.GetUserRatePlan(User);
				return Ok(plan);
			}
			catch (Exception ex)
			{

				return BadRequest(ex.Message);
			}
		}

		[HttpPost("changeCreds")]
		public async Task<IActionResult> ChangeCredentials(ChangeCredentialsModel model)
		{
			var user = await _userManager.GetUserAsync(User);

			try
			{
				if (!string.IsNullOrWhiteSpace(model.Email))
				{
					var token = await _userManager.GenerateChangeEmailTokenAsync(user, model.Email);
					await _userManager.ChangeEmailAsync(user, model.Email, token);
					await _userManager.SetUserNameAsync(user, model.Email);
				}

				if(!string.IsNullOrWhiteSpace(model.NewPassword) && !string.IsNullOrWhiteSpace(model.OldPassword))
				{
					await _userManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);
				}

				return Ok();
			}
			catch (Exception ex)
			{

				return BadRequest(ex.Message);
			}
		}

		[HttpPatch("changePhone")]
		public async Task<IActionResult> ChangePhoneNumber(string phone)
		{
			var user = await _userManager.GetUserAsync(User);

			try
			{
				if (!string.IsNullOrWhiteSpace(phone))
				{
					var token = await _userManager.GenerateChangePhoneNumberTokenAsync(user, phone);
					await _userManager.ChangePhoneNumberAsync(user , phone, token);
				}
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

	}
}

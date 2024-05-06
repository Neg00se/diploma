using DataAccessLayer.IdentityItems;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GasApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[Authorize(Roles ="Admin")]
	public class AdminController : ControllerBase
	{
		private readonly UserManager<User> _userManager;

		public AdminController(UserManager<User> userManager)
        {
			_userManager = userManager;
		}

		[HttpGet("getUsers")]
		public async Task<IActionResult> GetAllUsers()
		{
			try
			{
				var users = await _userManager.GetUsersInRoleAsync("User");
				return Ok(users);
			}
			catch (Exception ex)
			{

				return BadRequest(ex.Message);
			}
		}
    }
}

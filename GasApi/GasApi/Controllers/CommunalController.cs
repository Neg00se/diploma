using BusinessLogicLayer.Models;
using BusinessLogicLayer.Services;
using DataAccessLayer.IdentityItems;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace GasApi.Controllers;

[Route("api/[controller]")]
[Authorize]
[ApiController]
public class CommunalController : ControllerBase
{
	private readonly ICommunalPaymentService _communalService;
	private readonly UserManager<User> _userManager;

	public CommunalController(ICommunalPaymentService communalService , UserManager<User> userManager)
	{
		_communalService = communalService;
		_userManager = userManager;
	}

	[HttpGet("toPay")]
	public async Task<IActionResult> ToPay()
	{
		try
		{
			var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
			var toPay = await _communalService.ToPayAsync(userId);
			return Ok(toPay);
		}
		catch (Exception ex)
		{

			return BadRequest(ex.Message);
		}
	}

	[HttpGet("get")]
	public async Task<IActionResult> GetCommunals()
	{
		try
		{
			var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
			var communals = await _communalService.GetAllAsync(userId);
			return Ok(communals);
		}
		catch (Exception ex)
		{

			return BadRequest(ex.Message);
		}
	}


	[HttpPost("pay")]
	public async Task<IActionResult> Pay(decimal amount)
	{
		try
		{
			var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
			await _communalService.PayBillsAsync(amount , userId);
			return Ok();
		}
		catch (Exception ex)
		{

			return BadRequest(ex.Message);
		}
	}

	[HttpPost("addCommunal")]
	public async Task<IActionResult> AddCommunalPayment(UserIndicatorsModel userIndicators)
	{
		try
		{
		
			var user = await _userManager.GetUserAsync(User);
			await _communalService.AddAsync(userIndicators, user);
			return Ok();
		}
		catch (Exception ex)
		{

			return BadRequest(ex.Message);
		}
	}
}
using AutoMapper;
using BusinessLogicLayer.Models;
using DataAccessLayer.Entities;
using DataAccessLayer.IdentityItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer;

public class AutomapperProfile : Profile
{
	public AutomapperProfile()
	{
		CreateMap<CommunalPayment, CommunalInfoModel>()
		.ForMember(ci => ci.RateName, cp => cp.MapFrom(x => x.Rate.Name))
		.ForMember(ci => ci.RatePrice, cp => cp.MapFrom(x => x.Rate.Price))
		//.ForMember(ci => ci.RateId, cp => cp.MapFrom(x => x.RateId))
		//.ReverseMap()
		;

		CreateMap<Rate, RatePlanModel>();

		CreateMap<UserIndicatorsModel, CommunalPayment>();

		CreateMap<User, UserModel>().ReverseMap();
	}
}

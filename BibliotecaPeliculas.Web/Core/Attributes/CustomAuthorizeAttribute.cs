using LibraryFilms.Web.Data;
using LibraryFilms.Web.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Reflection;

namespace LibraryFilms.Web.Core.Attributes
{
    public class CustomAuthorizeAttribute : TypeFilterAttribute
    {
        public CustomAuthorizeAttribute(string permission, string module) : base(typeof(CustomAuthorizeFilter))
        {
            Arguments = new object[] { permission, module };
        }
    }

    public class CustomAuthorizeFilter : IAsyncAuthorizationFilter
    {
        private readonly string _permission;
        private readonly string _module;
        private readonly IActorsService _actorsService;

        public CustomAuthorizeFilter(string permission, string module, IActorsService actorService)
        {
            _permission = permission;
            _module = module;
            _actorsService = actorService;
        }
    }

    public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
    {
        bool isAuthorized = await _actorsService.CurrentUserIsAuthorizedAsync(_permission, _module);
        if (isAuthorized)
        {
            context.Result = new ForbidResult();
        }
    }
}

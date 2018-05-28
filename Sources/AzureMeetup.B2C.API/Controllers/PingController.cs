using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AzureMeetup.B2C.API.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class PingController : Controller
    {
        [HttpGet]
        public string Get()
        {
            return "Pong";
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Cors;
using static SuperMarket.API.Connection.Connection;
using SuperMarket.API.Model;

namespace SuperMarket.API.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost("register")]
        public object Post([FromBody] Register value)
        {
            Console.WriteLine("register");

            var boole = Insertion(value);
            Console.WriteLine(boole);
            if (boole)
            {
                return new Response
                { status = "Success", message = "Record SuccessFully Saved." };
            }
            else
            {
                return new Response
                { status = "Field", message = "Existing Record." };

            }
        }

        //POST api/values
        [HttpPost("login")]
        public object Post([FromBody] Login value)
        {
            // Register reg = new Register();
            Console.WriteLine("login");

            var user = Log(value);
            Console.WriteLine("user " + user);
            if (user != null)
            {
                return new Response
                { status = "Success", message = "Connection right", data = user };
            }
            return new Response
            { status = "Field", message = "Connection field", data = null };
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Cors;
using static SuperMarket.API.Connection.Connection;
using static SuperMarket.API.PatientFunction.PatientFunction;
using static SuperMarket.API.AppointmentFunction.AppointmentFunction;
using static SuperMarket.API.DiseaseFunction.DiseaseFunction;
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



        // Register
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



        // AddPatient
        [HttpPost("addPatient")]
        public object Post([FromBody] Patient value)
        {
            Console.WriteLine("addPatient");

            var boole = InsertionPatient(value);
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

        //ShowPatient
        [HttpPost("showPatients")]
        public object Post([FromBody] Doctor value)
        {
            Console.WriteLine("showPatient");
            var v = ShowPatient(value);

            // var boole = ShowPatient(value);
            Console.WriteLine("show Doc");
            Console.WriteLine(v);
            Console.WriteLine(" v is null " + v != null);

            if (v != null)
            {
                Console.WriteLine("Yeess");
                return new ResponsePatient
                { status = "Success", message = "Record SuccessFully Saved.", data = v };
            }
            else
            {
                return new ResponsePatient
                { status = "Field", message = "Existing Record.", data = null };

            }
        }

        // AddAppointment
        [HttpPost("addAppointment")]
        public object Post([FromBody] Appointment value)
        {
            Console.WriteLine("addAppointment");

            var boole = InsertionAppointment(value);
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

        //ShowAppointment
        [HttpPost("showAppointments")]
        public object Post([FromBody] DoctorAppointment value)
        {
            Console.WriteLine("showAppointment");
            var v = ShowAppointment(value);

            // var boole = ShowAppointment(value);
            Console.WriteLine("show Doc");
            Console.WriteLine(v);
            Console.WriteLine(" v is null " + v != null);

            if (v != null)
            {
                Console.WriteLine("Yeess");
                return new ResponseAppointment
                { status = "Success", message = "Record SuccessFully Saved.", data = v };
            }
            else
            {
                return new ResponseAppointment
                { status = "Field", message = "Existing Record.", data = null };

            }
        }

        // AddPatient
        [HttpPost("addDisease")]
        public object Post([FromBody] Disease value)
        {
            Console.WriteLine("addDisease");

            var boole = InsertionDisease(value);
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

        //ShowAppointment
        [HttpPost("showDiseases")]
        public object Post([FromBody] DoctorDisease value)
        {
            Console.WriteLine("showDisease");
            var v = ShowDisease(value);

            // var boole = ShowDisease(value);
            Console.WriteLine("show Doc");
            Console.WriteLine(v);
            Console.WriteLine(" v is null " + v != null);

            if (v != null)
            {
                Console.WriteLine("Yeess");
                return new ResponseDisease
                { status = "Success", message = "Record SuccessFully Saved.", data = v };
            }
            else
            {
                return new ResponseDisease
                { status = "Field", message = "Existing Record.", data = null };

            }
        }


        //Login
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
                { status = "Success", message = "Connection right", data = user._id.Timestamp };
            }
            return new Response
            { status = "Field", message = "Connection field" };
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

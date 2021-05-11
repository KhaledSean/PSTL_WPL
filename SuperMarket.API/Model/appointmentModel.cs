using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SuperMarket.API.Model
{
    public class Appointment
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId _id { get; set; }
        public int idDoctor { get; set; }
        public string appointmentType { get; set; }
         public string date { get; set; }
        public string status { get; set; }
        public string patientName { get; set; }
        public string time { get; set; }
        public string prescription { get; set; }
        public string diagnostic { get; set; }
        public string comments { get; set; }

        public override string ToString()
        {
            return _id + " patientName =" + patientName;
        }
    }

    public class DoctorAppointment
    {
        public int userId { get; set; }

        public override string ToString()
        {
            return  " Doctor userId =" + userId;
        }
    }

      public class ResponseAppointment
    {
        public string status { set; get; }
        public string message { set; get; }
        public List<Appointment> data { set; get; }
    }
}
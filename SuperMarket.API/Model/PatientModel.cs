using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SuperMarket.API.Model
{
    public class Patient
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId _id { get; set; }
        public int idDoctor { get; set; }
        public string firstNamePatient { get; set; }
        public string lastNamePatient { get; set; }
        public int age { get; set; }
        public string history { get; set; }
        public string location { get; set; }
        public string gender { get; set; }

        public override string ToString()
        {
            return _id + " firstNamePatient =" + firstNamePatient;
        }
    }
        public class PatientItem
    {
        public List<Patient> patients { get; set; }

        public override string ToString()
        {
            return  " patients =" + patients;
        }
    }

    public class Doctor
    {
        public int userId { get; set; }

        public override string ToString()
        {
            return  " Doctor userId =" + userId;
        }
    }
      public class ResponsePatient
    {
        public string status { set; get; }
        public string message { set; get; }
        public List<Patient> data { set; get; }
    }
}
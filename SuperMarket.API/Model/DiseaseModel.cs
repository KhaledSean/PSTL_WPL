using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SuperMarket.API.Model
{
    public class Disease
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId _id { get; set; }
        public int idDoctor { get; set; }
        public string diseaseName { get; set; }
         public string symptoms { get; set; }
        public string reference { get; set; }

        public override string ToString()
        {
            return _id + " diseaseName =" + diseaseName;
        }
    }

    public class DoctorDisease
    {
        public int userId { get; set; }

        public override string ToString()
        {
            return  " Doctor userId =" + userId;
        }
    }

      public class ResponseDisease
    {
        public string status { set; get; }
        public string message { set; get; }
        public List<Disease> data { set; get; }
    }
}
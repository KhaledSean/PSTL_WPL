//if[Report]

using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SuperMarket.API.Model
{
    public class Report
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId _id { get; set; }
        public int idDoctor { get; set; }
        public string reportName { get; set; }
         public string content { get; set; }

        public override string ToString()
        {
            return _id + " ReportName =" + reportName;
        }
    }

    public class DoctorReport
    {
        public int userId { get; set; }

        public override string ToString()
        {
            return  " Doctor userId =" + userId;
        }
    }

      public class ResponseReport
    {
        public string status { set; get; }
        public string message { set; get; }
        public List<Report> data { set; get; }
    }
}namespace SuperMarket.API.Model
{
    public class ReportModel
    {
        
    }
}
//endif[Report]
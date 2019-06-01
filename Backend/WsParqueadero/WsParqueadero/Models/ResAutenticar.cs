using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WsParqueadero.Models
{
    public class ResAutenticar
    {
        public String Codigo { get; set; }
        public String Mensaje { get; set; }
        public Pago pago { get; set; }
        public Usuario usuario { get; set; }
    }
}
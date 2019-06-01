using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Configuration;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;
using System.Web.Http.Description;
using WsParqueadero.Models;

namespace WsParqueadero.Controllers
{
    public class UsuariosController : ApiController
    {
        private IngWebParqueaderoEntities db = new IngWebParqueaderoEntities();

        // GET: api/Usuarios
        public IQueryable<Usuario> GetUsuario()
        {
            return db.Usuario;
        }

        [HttpGet]
        // GET: api/Usuarios/
        [ResponseType(typeof(Usuario))]
        public ResAutenticar GetUsuario(string usuario, string contrasena)
        {
            List<Usuario> Lsusuario = db.Usuario.Where(x => x.Contrasena == contrasena && x.Usuario1 == usuario).ToList();
            ResAutenticar res = new ResAutenticar();
            Usuario us = new Usuario();
            Pago ObjPago = new Pago();
            if (Lsusuario.Count() == 0)
            {
                res.Codigo = "-1";
                res.Mensaje = "Usuario o contraseña invalidas";
                res.pago = ObjPago;
                res.usuario = us;
                return res;
            }
            else
            {
                //ResAutenticar res = new ResAutenticar();
                
                foreach (var item in Lsusuario)
                {
                    us.Nombre = item.Nombre;
                    us.Estado = item.Estado;
                    us.Contrasena = item.Contrasena;
                    us.Apellido = item.Apellido;
                    us.Cedula = item.Cedula;
                    us.email = item.email;
                    us.TipoVehiculo = item.TipoVehiculo;
                    us.TipoDocumento = item.TipoDocumento;
                    us.Usuario1 = item.Usuario1;
                }

                List<Pago> P = new List<Pago>();
                P = db.Pago.Where(x => x.Cedula == us.Cedula).ToList();
                foreach (var item in P)
                {
                    ObjPago.Cedula = item.Cedula;
                    ObjPago.EstadoTx = item.EstadoTx;
                    ObjPago.Fecha = item.Fecha;
                    ObjPago.HoraIngreso = item.HoraIngreso;
                    ObjPago.id_Pago = item.id_Pago;
                    ObjPago.Tarifa = item.Tarifa;
                    ObjPago.Total = item.Total;
                    ObjPago.id_Pago = item.id_Pago;
                    //ObjPago.Usuario = item.Usuario;
                }

                

                res.Codigo = "100";
                res.Mensaje = "ok";
                res.pago = ObjPago;
                res.usuario = us;
                return res;
            }
        }
        [HttpGet]
        // PUT: api/Usuarios/5
        [ResponseType(typeof(void))]
        public string PutUsuario(string documento, string tipo, string nombre, string apellido, string correo, string telefono, string Tipov,
          string placa, string jornada, string perfil, string usuario, string contrasena)
        {
            Usuario user = new Usuario();

            user.Cedula = Convert.ToInt32(documento);
            user.Apellido = apellido;
            user.Contrasena = contrasena;
            user.email = correo;
            user.Estado = "Activo";
            user.Nombre = nombre;            
            user.Perfil = perfil;
            user.Placa = placa;
            user.Telefono = telefono;
            user.TipoDocumento = tipo;
            user.TipoVehiculo = Tipov;
            user.Usuario1 = usuario;

            //user.Pago =
            try
            {
                db.InsertarUsuario(user.Cedula, user.Nombre, user.Apellido, user.email, user.Telefono, user.TipoVehiculo, user.Placa, user.Perfil, user.Usuario1, user.Contrasena, user.Estado, user.TipoDocumento);
                return "Exitoso";
            }
            catch (Exception ex)
            {
                return "Fallo";
            }


            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //if (id != usuario.Cedula)
            //{
            //    return BadRequest();
            //}

            //db.Entry(usuario).State = EntityState.Modified;

            //try
            //{
            //    db.SaveChanges();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!UsuarioExists(id))
            //    {
            //        return NotFound();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpGet]
        // POST: api/Usuarios
        [ResponseType(typeof(Usuario))]
        public Usuario PostUsuario(int cedula)
        {
             //Usuario user = db.Usuario.Find(cedula);
            List<Usuario> Lsusuario = db.Usuario.Where(x => x.Cedula == cedula).ToList();
            Usuario us = new Usuario();
            if (Lsusuario.Count > 0)
            {
                foreach (var item in Lsusuario)
                {
                    us.Nombre = item.Nombre;
                    us.Estado = item.Estado;
                    us.Contrasena = item.Contrasena;
                    us.Apellido = item.Apellido;
                    us.Cedula = item.Cedula;
                    us.email = item.email;
                    us.TipoVehiculo = item.TipoVehiculo;
                    us.TipoDocumento = item.TipoDocumento;
                    us.Usuario1 = item.Usuario1;
                }
            }
            //try
            //{
            //    db.SaveChanges();
            //}
            //catch (DbUpdateException)
            //{
            //    if (UsuarioExists(cedula))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            return us;
        }

        [HttpGet]
        // POST: api/Usuarios
        [ResponseType(typeof(Usuario))]
        public ResAutenticar PagoUsuario(int tiquete)
        {
            //Usuario user = db.Usuario.Find(cedula);
            List<Pago> Lpago = db.Pago.Where(x => x.id_Pago == tiquete).ToList();
            Pago p = new Pago();
            ResAutenticar Ra = new ResAutenticar();
            if(Lpago.Count()>0)
            {
                foreach (var item in Lpago)
                {
                    p.id_Pago = item.id_Pago;
                    p.Cedula = item.Cedula;
                    p.EstadoTx = "Cancelado";
                    p.Fecha = item.Fecha;
                    p.HoraIngreso = item.HoraIngreso;
                    p.Tarifa = item.Tarifa;
                    p.Total = item.Total;
                    p.Usuario = item.Usuario;
                }
                List<Usuario> Lsusuario = db.Usuario.Where(x => x.Cedula == p.Cedula).ToList();
                Usuario us = new Usuario();
                if (Lsusuario.Count > 0)
                {
                    foreach (var item in Lsusuario)
                    {
                        us.Nombre = item.Nombre;
                        us.Estado = item.Estado;
                        us.Contrasena = item.Contrasena;
                        us.Apellido = item.Apellido;
                        us.Cedula = item.Cedula;
                        us.email = item.email;
                        us.TipoVehiculo = item.TipoVehiculo;
                        us.TipoDocumento = item.TipoDocumento;
                        us.Usuario1 = item.Usuario1;
                    }
                }

                try
                {
                    db.UpdatePago(p.id_Pago, p.Tarifa, p.Cedula, p.Fecha, p.HoraIngreso, p.Total, p.EstadoTx);
                    //db.Entry(p).State = EntityState.Modified;
                    //db.SaveChanges();

                    List<Pago> Lpago1 = db.Pago.Where(x => x.id_Pago == tiquete).ToList();
                    Pago p1 = new Pago();
                    ResAutenticar Ra1 = new ResAutenticar();
                    if (Lpago1.Count() > 0)
                    {
                        foreach (var item in Lpago1)
                        {
                            p1.id_Pago = item.id_Pago;
                            p1.Cedula = item.Cedula;
                            p1.EstadoTx = "Transacción Exitosa";
                            p1.Fecha = item.Fecha;
                            p1.HoraIngreso = item.HoraIngreso;
                            p1.Tarifa = item.Tarifa;
                            p1.Total = item.Total;
                            p1.Usuario = us;
                        }
                        Ra.pago = p1;
                    }
                }
                catch (Exception ex)
                {
                    //Usuario us = db.Usuario.Find(p.Cedula);
                    Ra.Codigo = "-1";
                    Ra.Mensaje = "Error en el guardado";
                    Ra.pago = p;
                    Ra.usuario = us;
                    return Ra;
                }
                Ra.Codigo = "100";
                Ra.Mensaje = "ok";
               
                Ra.usuario = us;
            } 
           

            return Ra;
        }

        // DELETE: api/Usuarios/5
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult DeleteUsuario(int id)
        {
            Usuario usuario = db.Usuario.Find(id);
            if (usuario == null)
            {
                return NotFound();
            }

            db.Usuario.Remove(usuario);
            db.SaveChanges();

            return Ok(usuario);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UsuarioExists(int id)
        {
            return db.Usuario.Count(e => e.Cedula == id) > 0;
        }

        private string EnviarMail(string correo, string clave, string usuario)
        {
            var smtpSection = (SmtpSection)ConfigurationManager.GetSection("system.net/mailSettings/smtp");
            string strHost = smtpSection.Network.Host;
            int port = smtpSection.Network.Port;
            string strUserName = smtpSection.Network.UserName;
            string strFromPass = smtpSection.Network.Password;
            SmtpClient smtp = new SmtpClient(strHost, port);
            NetworkCredential cert = new NetworkCredential(strUserName, strFromPass);
            smtp.Credentials = cert;
            smtp.EnableSsl = true;
            MailMessage msg = new MailMessage(smtpSection.From, correo);
            msg.Subject = "Recordar Contraseña";
            msg.IsBodyHtml = true;
            msg.Body += "Buen día, Este es un mensaje de su parqueadero: Usuario:";
            msg.Body += usuario + " y su contraseña es: ";
            msg.Body += clave;

            smtp.Send(msg);

            return "";
        }

        [HttpGet]
        // POST: api/Usuarios
        [ResponseType(typeof(Usuario))]
        public string CorreoUsuario(string correo)
        {
            //Usuario user = db.Usuario.Find(cedula);
            List<Usuario> Lsusuario = db.Usuario.Where(x => x.email == correo).ToList();
            Usuario us = new Usuario();
            if (Lsusuario.Count > 0)
            {
                foreach (var item in Lsusuario)
                {
                    us.Nombre = item.Nombre;
                    us.Estado = item.Estado;
                    us.Contrasena = item.Contrasena;
                    us.Apellido = item.Apellido;
                    us.Cedula = item.Cedula;
                    us.email = item.email;
                    us.TipoVehiculo = item.TipoVehiculo;
                    us.TipoDocumento = item.TipoDocumento;
                    us.Usuario1 = item.Usuario1;
                }
                try
                {
                    EnviarMail(us.email, us.Contrasena, us.Usuario1);
                    return "Exitoso";
                }
                catch (Exception ex)
                {
                    return "Error en el envio del correo";
                }
            }
            else
            {
                return "El correo no esta registrado";
            }
            //try
            //{
            //    db.SaveChanges();
            //}
            //catch (DbUpdateException)
            //{
            //    if (UsuarioExists(cedula))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            
        }

    }
}
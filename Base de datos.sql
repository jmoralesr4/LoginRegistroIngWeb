USE [IngWebParqueadero]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 05/31/2019 21:05:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Usuario](
	[Cedula] [int] NOT NULL,
	[Nombre] [varchar](100) NULL,
	[Apellido] [varchar](100) NULL,
	[email] [varchar](100) NULL,
	[Telefono] [varchar](50) NULL,
	[TipoVehiculo] [varchar](50) NULL,
	[Placa] [varchar](10) NULL,
	[Perfil] [varchar](20) NULL,
	[Usuario] [varchar](50) NULL,
	[Contrasena] [varchar](50) NULL,
	[Estado] [varchar](50) NULL,
	[TipoDocumento] [varchar](50) NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[Cedula] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[Usuario] ([Cedula], [Nombre], [Apellido], [email], [Telefono], [TipoVehiculo], [Placa], [Perfil], [Usuario], [Contrasena], [Estado], [TipoDocumento]) VALUES (80176599, N'Juan Carlos', N'Morales', N'jmoralesr4@ucentral.edu.co', N'3014661742', N'Moto', N'XYR42D', N'Administrador', N'jmoralesr4', N'jmoralesr4', N'Activo', N'CC')
/****** Object:  Table [dbo].[Pago]    Script Date: 05/31/2019 21:05:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Pago](
	[id_Pago] [int] IDENTITY(1,1) NOT NULL,
	[Tarifa] [int] NULL,
	[Cedula] [int] NULL,
	[Fecha] [varchar](50) NULL,
	[HoraIngreso] [varchar](10) NULL,
	[Total] [varchar](50) NULL,
	[EstadoTx] [varchar](50) NULL,
 CONSTRAINT [PK_Pago] PRIMARY KEY CLUSTERED 
(
	[id_Pago] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Pago] ON
INSERT [dbo].[Pago] ([id_Pago], [Tarifa], [Cedula], [Fecha], [HoraIngreso], [Total], [EstadoTx]) VALUES (1, 65, 80176599, N'31/05/2019', N'2:00 pm', N'3500', N'Pendiente')
SET IDENTITY_INSERT [dbo].[Pago] OFF
/****** Object:  ForeignKey [FK_Pago_Usuario]    Script Date: 05/31/2019 21:05:36 ******/
ALTER TABLE [dbo].[Pago]  WITH CHECK ADD  CONSTRAINT [FK_Pago_Usuario] FOREIGN KEY([Cedula])
REFERENCES [dbo].[Usuario] ([Cedula])
GO
ALTER TABLE [dbo].[Pago] CHECK CONSTRAINT [FK_Pago_Usuario]
GO

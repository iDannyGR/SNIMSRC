import { NoteType } from "@/types/note.type";

export const tempNotes: NoteType[] = [
  {
    siteId: "site-001",
    object: "Revisión de seguridad mensual",
    description: "Análisis completo de las medidas de seguridad implementadas en el sistema",
    result: "Se identificaron 3 vulnerabilidades menores que requieren atención",
    authorId: "user-123",
    deleteAt: null
  },
  {
    siteId: "site-002",
    object: "Actualización de software",
    description: "Proceso de actualización del sistema operativo y aplicaciones críticas",
    result: "Actualización completada exitosamente sin interrupciones del servicio",
    authorId: "user-456",
    deleteAt: new Date("2024-12-31")
  },
  {
    siteId: "site-003",
    object: "Backup de base de datos",
    description: "Copia de seguridad completa de todas las bases de datos productivas",
    result: "Backup realizado correctamente, 500GB almacenados en la nube",
    authorId: "user-789",
    deleteAt: null
  },
  {
    siteId: "site-001",
    object: "Mantenimiento preventivo",
    description: "Revisión y limpieza de hardware en el centro de datos",
    result: "Equipos en óptimas condiciones, se reemplazó un ventilador defectuoso",
    authorId: "user-123",
    deleteAt: null
  },
  {
    siteId: "site-004",
    object: "Migración a nueva plataforma",
    description: "Transferencia de servicios a la nueva infraestructura cloud",
    result: "Migración exitosa con downtime de solo 15 minutos",
    authorId: "user-101",
    deleteAt: new Date("2024-06-30")
  }
];

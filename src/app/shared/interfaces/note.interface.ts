/**
 * Clas de una Nota
 */
export class NoteInterface {
  /**
   * Id único de la nota
   */
  id: number;

  /**
   * Título a mostrar de la nota
   */
  title: string;

  /**
   * Fecha en la que se crea la nota
   */
  date: Date | string;

  /**
   * Contenido de la nota
   */
  content: string;

  /**
   * Status de la nota:
   * ['active', 'archived', 'deleted']
   */
  status: string;
}

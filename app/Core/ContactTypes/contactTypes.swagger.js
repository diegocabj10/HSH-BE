/**
 * @swagger
 *  /contacttypes:
 *    get:
 *      description: Get all contactTypes
 *      tags: [Contact Types]
 *      parameters:
 *        - in: query
 *          name: size
 *          description: Max records to return
 *          schema:
 *            type: integer
 *        - in: query
 *          name: page
 *          description: Number of page
 *          schema:
 *            type: integer
 *        - in: query
 *          name: name
 *          description: Signal name
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Get all contactTypes with pagination
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  totalItems:
 *                    type: integer
 *                    description: Total items
 *                    example: 1
 *                  list:
 *                    type: array
 *                    description: List of contactTypes
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          description: Identification number.
 *                          example: 1
 *                        name:
 *                          type: string
 *                          description: Name of contactType.
 *                          example: Señal
 *                        deletionDate:
 *                          type: string
 *                          description: Deletion date.
 *                          example: null
 *                        createdAt:
 *                          type: string
 *                          description: Creation date.
 *                          example: viernes, 01 de enero de 2021, 00:00:00
 *                        updatedAt:
 *                          type: string
 *                          description: Modification date.
 *                          example: viernes, 01 de enero de 2021, 00:00:00
 *                  totalPages:
 *                    type: integer
 *                    description: Total pages
 *                    example: 1
 *                  page:
 *                    type: integer
 *                    description: Current page
 *                    example: 0
 *        500:
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  internal code:
 *                    type: string
 *    post:
 *      description: Create new contactType
 *      tags: [Contact Types]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - name
 *              properties:
 *                name:
 *                  type: string
 *                  description: Name of contactType.
 *                  example: Señal
 *      responses:
 *        200:
 *          description: New contactType is created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    description: Identification number.
 *                    example: 1
 *                  name:
 *                    type: string
 *                    description: Name of contactType.
 *                    example: Señal
 *                  deletionDate:
 *                    type: string
 *                    description: Deletion date.
 *                    example: null
 *                  createdAt:
 *                    type: string
 *                    description: Creation date.
 *                    example: viernes, 01 de enero de 2021, 00:00:00
 *                  updatedAt:
 *                    type: string
 *                    description: Modification date.
 *                    example: viernes, 01 de enero de 2021, 00:00:00
 *        400:
 *          description: Invalid parameters
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  internal code:
 *                    type: string
 *        500:
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  internal code:
 *                    type: string
 * @swagger
 *  /contacttypes/listall:
 *    get:
 *      description: Get all contactTypes without pagination in a specific format
 *      tags: [Contact Types]
 *      responses:
 *        200:
 *          description: Get a list of contactTypes without pagination
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                description: List of contactTypes
 *                items:
 *                  type: object
 *                  properties:
 *                    key:
 *                      type: integer
 *                      description: Identification number.
 *                      example: 1
 *                    value:
 *                      type: integer
 *                      description: Identification number.
 *                      example: 1
 *                    label:
 *                      type: string
 *                      description: Name of contactType.
 *                      example: Tipo de Contacto
 *        500:
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  internal code:
 *                    type: string
 * @swagger
 * /contacttypes/{id}:
 *   get:
 *     description: Gets the contactType with the id
 *     tags: [Contact Types]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Signal id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: Signal data about the id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    description: Identification number.
 *                    example: 1
 *                  name:
 *                    type: string
 *                    description: Name of contactType.
 *                    example: Señal
 *                  deletionDate:
 *                    type: string
 *                    description: Deletion date.
 *                    example: null
 *                  createdAt:
 *                    type: string
 *                    description: Creation date.
 *                    example: viernes, 01 de enero de 2021, 00:00:00
 *                  updatedAt:
 *                    type: string
 *                    description: Modification date.
 *                    example: viernes, 01 de enero de 2021, 00:00:00
 *        500:
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  internal code:
 *                    type: string
 *   put:
 *     description: Updates values on the contactType with the id
 *     tags: [Contact Types]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Signal id
 *          schema:
 *            type: integer
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - name
 *              properties:
 *                name:
 *                  type: string
 *                  description: Name of contactType.
 *                  example: Señal
 *     responses:
 *        200:
 *          description: Información modificada o No se pudo modificar la información
 *        500:
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  internal code:
 *                    type: string
 *
 *   delete:
 *     description: Deletes contactType with the id
 *     tags: [Contact Types]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Signal id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: Registro eliminado o No se pudo eliminar el registro
 *        500:
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  internal code:
 *                    type: string
 *
 * @swagger
 *  /contacttypes/expires/{id}:
 *   patch:
 *     description: Expires contactType with the id, by patching the deletionDate
 *     tags: [Contact Types]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Signal id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: Información modificada o No se pudo modificar la información
 *        500:
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  internal code:
 *                    type: string
 */

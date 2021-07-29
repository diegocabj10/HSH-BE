/**
 * @swagger
 *  /profiles:
 *    get:
 *      description: Get all profiles
 *      tags: [Profiles]
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
 *          description: Profile name
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Get all profiles with pagination
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
 *                    description: List of profiles
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          description: Identification number.
 *                          example: 1
 *                        name:
 *                          type: string
 *                          description: Name of profile.
 *                          example: Señal
 *                        read:
 *                          type: string
 *                          description: Scenes in which profile can view
 *                          example: 1,5,8
 *                        create:
 *                          type: string
 *                          description: Scenes in which profile can create
 *                          example: 1,5
 *                        update:
 *                          type: string
 *                          description: Scenes in which profile can update
 *                          example: 8
 *                        delete:
 *                          type: string
 *                          description: Scenes in which profile can delete
 *                          example: 2,5,6
 *                        erase:
 *                          type: string
 *                          description: Scenes in which profile can erase
 *                          example: 9
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
 *      description: Create new profile
 *      tags: [Profiles]
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
 *                  description: Name of profile.
 *                  example: Señal
 *      responses:
 *        200:
 *          description: New profile is created
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
 *                    description: Name of profile.
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
 * /profiles/{id}:
 *   get:
 *     description: Gets the profile with the id
 *     tags: [Profiles]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Profile id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: Profile data about the id
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
 *                    description: Name of profile.
 *                    example: Administrador
 *                  permissions:
 *                    type: string
 *                    description: Permissions assigned to the profile
 *                    example: 0102,0205,0302
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
 *     description: Updates values on the profile with the id
 *     tags: [Profiles]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Profile id
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
 *                  description: Name of profile.
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
 *     description: Deletes profile with the id
 *     tags: [Profiles]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Profile id
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
 *  /profiles/expires/{id}:
 *   patch:
 *     description: Expires profile with the id, by patching the deletionDate
 *     tags: [Profiles]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Profile id
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

/**
 * @swagger
 *  /notices:
 *    get:
 *      description: Get all notices
 *      tags: [Notices]
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
 *          name: title
 *          description: Notice title
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Get all notices with pagination
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
 *                    description: List of notices
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          description: Identification number.
 *                          example: 1
 *                        title:
 *                          type: string
 *                          description: Title of notice.
 *                          example: Recarga de matafuegos.
 *                        message:
 *                          type: string
 *                          description: Message of notice.
 *                          example: Se recargarán los matafuegos de todos los pisos.
 *                        userId:
 *                          type: integer
 *                          description: User identification number.
 *                          example: 1
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
 *      description: Create new notice
 *      tags: [Notices]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - title
 *                - message
 *              properties:
 *                title:
 *                  type: string
 *                  description: Title of notice.
 *                  example: Recarga de matafuegos.
 *                message:
 *                  type: string
 *                  description: Message of notice.
 *                  example: Se recargarán los matafuegos de todos los pisos.
 *      responses:
 *        200:
 *          description: New notice is created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                required:
 *                  - signalId
 *                  - devideId
 *                  - value
 *                properties:
 *                  title:
 *                    type: string
 *                    description: Title of notice.
 *                    example: Recarga de matafuegos.
 *                  message:
 *                    type: string
 *                    description: Message of notice.
 *                    example: Se recargarán los matafuegos de todos los pisos.
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
 * /notices/{id}:
 *   get:
 *     description: Gets the notice with the id
 *     tags: [Notices]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Notice id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: Notice data about the id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    description: Identification number.
 *                    example: 1
 *                  title:
 *                    type: string
 *                    description: Title of notice.
 *                    example: Recarga de matafuegos.
 *                  message:
 *                    type: string
 *                    description: Message of notice.
 *                    example: Se recargarán los matafuegos de todos los pisos.
 *                  userId:
 *                    type: integer
 *                    description: User identification number.
 *                    example: 1
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
 *
 *   put:
 *     description: Updates values on the notice with the id
 *     tags: [Notices]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Notice id
 *          schema:
 *            type: integer
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - title
 *                - message
 *              properties:
 *                title:
 *                  type: string
 *                  description: Title of notice.
 *                  example: Recarga de matafuegos
 *                message:
 *                  type: string
 *                  description: Message of notice.
 *                  example: Se recargarán los matafuegos de todos los pisos.
 *     responses:
 *        200:
 *          description: returns code 1
 *          content:
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
 *     description: Deletes notice with the id
 *     tags: [Notices]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Notice id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: returns code 1
 *          content:
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
 *  /notices/expires/{id}:
 *   patch:
 *     description: Expires notice with the id, by patching the deletionDate
 *     tags: [Notices]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Notice id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: returns code 1
 *          content:
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

/**
 * @swagger
 *  /claims:
 *    get:
 *      description: Get all claims
 *      tags: [Claims]
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
 *      responses:
 *        200:
 *          description: Get all claims with pagination
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
 *                    description: List of claims
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          description: Identification number.
 *                          example: 1
 *                        title:
 *                          type: string
 *                          description: Title of claim.
 *                          example: Falta recarga del matafuego.
 *                        message:
 *                          type: string
 *                          description: Message of claim.
 *                          example: Falta recargar los matafuegos de los departamentos.
 *                        response:
 *                          type: string
 *                          description: Response to the claim.
 *                          example: null
 *                        contactUserId:
 *                          type: integer
 *                          description: Administrator user identification number.
 *                          example: 1
 *                        ownerUserId:
 *                          type: integer
 *                          description: Administrator user identification number.
 *                          example: 2
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
 *                  currentPage:
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
 *
 *    post:
 *      description: Create new claim
 *      tags: [Claims]
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
 *                  description: Title of claim.
 *                  example: Falta recarga del matafuego
 *                message:
 *                  type: string
 *                  description: Message of claim.
 *                  example: Falta recargar los matafuegos de los departamentos.
 *      responses:
 *        200:
 *          description: New claim is created
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
 *                    description: Title of claim.
 *                    example: Falta recarga del matafuego
 *                  message:
 *                    type: string
 *                    description: Message of claim.
 *                    example: Falta recargar los matafuegos de los departamentos.
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
 * /claims/{id}:
 *   get:
 *     description: Gets the claim with the id
 *     tags: [Claims]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Claim id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: Claim data about the id
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
 *                    description: Title of claim.
 *                    example: Falta recarga del matafuego.
 *                  message:
 *                    type: string
 *                    description: Message of claim.
 *                    example: Falta recargar los matafuegos de los departamentos.
 *                  response:
 *                    type: string
 *                    description: Response to the claim.
 *                    example: null
 *                  contactUserId:
 *                    type: integer
 *                    description: Administrator user identification number.
 *                    example: 1
 *                  ownerUserId:
 *                    type: integer
 *                    description: Administrator user identification number.
 *                    example: 2
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
 *     description: Updates the value on the claim with the id
 *     tags: [Claims]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Claim id
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
 *                  description: Title of claim.
 *                  example: Falta recarga del matafuego
 *                message:
 *                  type: string
 *                  description: Message of claim.
 *                  example: Falta recargar los matafuegos de los departamentos.
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
 *   patch:
 *     description: Patches the response value on the claim with the id
 *     tags: [Claims]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Claim id
 *          schema:
 *            type: integer
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - response
 *              properties:
 *                response:
 *                  type: string
 *                  description: Response to the claim with id
 *                  example: Su reclamo será atendido en breve
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
 *     description: Deletes claim with the id
 *     tags: [Claims]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Claim id
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
 *  /claims/expires/{id}:
 *   patch:
 *     description: Expires claim with the id, by patching the deletionDate
 *     tags: [Claims]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Claim id
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

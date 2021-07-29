/**
 * @swagger
 *  /notifications:
 *    get:
 *      description: Returns all notifications from the system that the user has access to
 *      tags: [Notifications]
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
 *          description: Notification title
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: A user login
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
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          description: Identification number.
 *                          example: 1
 *                        eventId:
 *                          type: integer
 *                          description: Event identification number.
 *                          example: 10
 *                        title:
 *                          type: string
 *                          description: Title notification.
 *                          example: Monoxido de Carbono
 *                        message:
 *                          type: string
 *                          description: Message notification.
 *                          example: Presencia de CO (+0.01%) Cefalea leve en 2 o 3 horas.
 *                        userId:
 *                          type: integer
 *                          description: User identification number.
 *                          example: 1
 *                        readDate:
 *                          type: string
 *                          description: Reading date.
 *                          example: null
 *                        deletionDate:
 *                          type: string
 *                          description: Deletion date.
 *                          example: null
 *                        createdAt:
 *                          type: string
 *                          description: Creation date.
 *                          example: 2020-12-30T20:49:21.000Z
 *                        updatedAt:
 *                          type: string
 *                          description: Modification date.
 *                          example: 2020-12-30T20:49:21.000Z
 *                  totalPages:
 *                    type: integer
 *                    description: Total pages
 *                    example: 1
 *                  page:
 *                    type: integer
 *                    description: Current page
 *                    example: 0
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
 * @swagger
 * /notifications/{id}:
 *   get:
 *     description: Gets the notification with the id
 *     tags: [Notifications]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Notification id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: Notification data about the id
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
 *                    description: Title of notification.
 *                    example: Falta recarga del matafuego.
 *                  message:
 *                    type: string
 *                    description: Message of notification.
 *                    example: Falta recargar los matafuegos de los departamentos.
 *                  response:
 *                    type: string
 *                    description: Response to the notification.
 *                    example: null
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
 *                    example: 2020-12-30T20:49:21.000Z
 *                  updatedAt:
 *                    type: string
 *                    description: Modification date.
 *                    example: 2020-12-30T20:49:21.000Z
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
 *  /notifications/expires/{id}:
 *   patch:
 *     description: Expires notification with the id, by patching the deletionDate
 *     tags: [Notifications]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Notification id
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
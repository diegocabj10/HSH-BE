/**
 * @swagger
 *  /notificationssettings:
 *    get:
 *      description: Get all notifications settings
 *      tags: [Notifications Settings]
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
 *          description: Title
 *          schema:
 *            type: string
 *        - in: query
 *          name: message
 *          description: Message
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Get all notifications settings with pagination
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
 *                    description: List of notifications settings
 *                    items:
 *                      type: object
 *                      properties:
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
 *                        valueFrom:
 *                          type: integer
 *                          description: Value from
 *                          example: 0
 *                        valueTo:
 *                          type: integer
 *                          description: Value to
 *                          example: 1
 *                        id:
 *                          type: integer
 *                          description: Identification number.
 *                          example: 1
 *                        title:
 *                          type: string
 *                          description: Title of notification.
 *                          example: Apertura de puerta o ventana
 *                        message:
 *                          type: string
 *                          description: Message of notification.
 *                          example: Se ha detectado una apertura de la puerta o ventana.
 *                        Signal:
 *                          type: object
 *                          properties:
 *                            id:
 *                              type: integer
 *                              description: Identification number.
 *                              example: 1
 *                            name:
 *                              type: string
 *                              description: Name of signal.
 *                              example: APERTURA/CIERRE ABERTURA
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
 *      description: Create new device
 *      tags: [Notifications Settings]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - signalId
 *                - title
 *                - message
 *                - valueFrom
 *                - valueTo
 *              properties:
 *                signalId:
 *                  type: integer
 *                  description: Signal id of notification setting.
 *                  example: 1
 *                title:
 *                  type: string
 *                  description:  Title of notification.
 *                  example: "Apertura de puerta o ventana"
 *                message:
 *                  type: string
 *                  description: Message of notification.
 *                  example: Se ha detectado una apertura de la puerta o ventana.
 *                valueFrom:
 *                  type: integer
 *                  description: Value from
 *                  example: 0
 *                valueTo:
 *                  type: integer
 *                  description: Value to
 *                  example: 1
 *      responses:
 *        200:
 *          description: New device is created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
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
 *                  valueFrom:
 *                    type: integer
 *                    description: Value from
 *                    example: 0
 *                  valueTo:
 *                    type: integer
 *                    description: Value to
 *                    example: 1
 *                  id:
 *                    type: integer
 *                    description: Identification number.
 *                    example: 1
 *                  title:
 *                    type: string
 *                    description: Title of notification.
 *                    example: Apertura de puerta o ventana
 *                  message:
 *                    type: string
 *                    description: Message of notification.
 *                    example: Se ha detectado una apertura de la puerta o ventana.
 *                  Signal:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                        description: Identification number.
 *                        example: 1
 *                      name:
 *                        type: string
 *                        description: Name of signal.
 *                        example: APERTURA/CIERRE ABERTURA
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
 * /notificationssettings/{id}:
 *   get:
 *     description: Gets the device with the id
 *     tags: [Notifications Settings]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Device id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: Device data about the id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
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
 *                  valueFrom:
 *                    type: integer
 *                    description: Value from
 *                    example: 0
 *                  valueTo:
 *                    type: integer
 *                    description: Value to
 *                    example: 1
 *                  id:
 *                    type: integer
 *                    description: Identification number.
 *                    example: 1
 *                  title:
 *                    type: string
 *                    description: Title of notification.
 *                    example: Apertura de puerta o ventana
 *                  message:
 *                    type: string
 *                    description: Message of notification.
 *                    example: Se ha detectado una apertura de la puerta o ventana.
 *                  Signal:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                        description: Identification number.
 *                        example: 1
 *                      name:
 *                        type: string
 *                        description: Name of signal.
 *                        example: APERTURA/CIERRE ABERTURA
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
 *     description: Updates values on the device with the id
 *     tags: [Notifications Settings]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Device id
 *          schema:
 *            type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - signalId
 *               - title
 *               - message
 *               - valueFrom
 *               - valueTo
 *             properties:
 *               signalId:
 *                 type: integer
 *                 description: Signal id of notification setting.
 *                 example: 1
 *               title:
 *                 type: string
 *                 description:  Title of notification.
 *                 example: "Apertura de puerta o ventana"
 *               message:
 *                 type: string
 *                 description: Message of notification.
 *                 example: Se ha detectado una apertura de la puerta o ventana.
 *               valueFrom:
 *                 type: integer
 *                 description: Value from
 *                 example: 0
 *               valueTo:
 *                 type: integer
 *                 description: Value to
 *                 example: 1
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
 *   delete:
 *     description: Deletes notification setting with the id
 *     tags: [Notifications Settings]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Device id
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
 *  /notificationssettings/expires/{id}:
 *   patch:
 *     description: Expires device with the id, by patching the deletionDate
 *     tags: [Notifications Settings]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Device id
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

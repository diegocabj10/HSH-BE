/**
 * @swagger
 *  /mydevices:
 *    post:
 *      description: Add new device
 *      tags: [My devices]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - serialNumber
 *                - pin
 *              properties:
 *                pin:
 *                  type: integer
 *                  description: Pin of device.
 *                  example: 2929
 *                serialNumber:
 *                  type: string
 *                  description: Device identification number.
 *                  example: AAAA
 *      responses:
 *        200:
 *          description: Added new device
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  deviceId:
 *                    type: integer
 *                    description: Identification number of device.
 *                    example: 1
 *                  userId:
 *                    type: integer
 *                    description: Identification number of user.
 *                    example: 1
 *                  profileId:
 *                    type: integer
 *                    description: Identification number of profile.
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
 *                  id:
 *                    type: integer
 *                    description: Identification number.
 *                    example: 1
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
 *  /mydevices:
 *    get:
 *      description: Get all devices
 *      tags: [My devices]
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
 *          description: Device name
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Get all devices with pagination
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
 *                    description: List of devices
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
 *                        lastConnection:
 *                          type: string
 *                          description: Last connection date.
 *                          example: viernes, 01 de enero de 2021, 00:00:00
 *                        status:
 *                          type: integer
 *                          description: Device status.
 *                          example: 1
 *                        id:
 *                          type: integer
 *                          description: Identification number.
 *                          example: 1
 *                        serialNumber:
 *                          type: integer
 *                          description: Identification number.
 *                          example: AAAA1111
 *                        name:
 *                          type: string
 *                          description: Name of device.
 *                          example: Arduino 1
 *                        UsageType:
 *                          type: object
 *                          properties:
 *                            id:
 *                              type: integer
 *                              description: Identification number.
 *                              example: 1
 *                            name:
 *                              type: string
 *                              description: Name of usage type.
 *                              example: APARTMENT
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
 * @swagger
 *  /mydevices/listall:
 *    get:
 *      description: Get all mydevices without pagination in a specific format
 *      tags: [My devices]
 *      responses:
 *        200:
 *          description: Get a list of mydevices without pagination
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                description: List of mydevices
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
 *                      description: Name of mydevices.
 *                      example: Arduino 1
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
 * /mydevices/{id}:
 *   get:
 *     description: Gets the device with the id
 *     tags: [My devices]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: UserProfileDevice id
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
 *                  lastConnection:
 *                    type: string
 *                    description: Last connection date.
 *                    example: null
 *                  status:
 *                    type: integer
 *                    description: Device status.
 *                    example: 0
 *                  id:
 *                    type: integer
 *                    description: Identification number.
 *                    example: 1
 *                  serialNumber:
 *                    type: integer
 *                    description: Identification number.
 *                    example: AAAA1111
 *                  name:
 *                    type: string
 *                    description: Name of device.
 *                    example: Arduino 1
 *                  UsageType:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                        description: Identification number.
 *                        example: 1
 *                      name:
 *                        type: string
 *                        description: Name of usage type.
 *                        example: APARTMENT
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
 *   patch:
 *     description: Patch name of the device with the id
 *     tags: [Devices]
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
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Device serial number.
 *                 example: "Arduino departamento"
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
 * @swagger
 *  /mydevices/expires/{id}:
 *   patch:
 *     description: Expires userProfileDevice with the id, by patching the deletionDate
 *     tags: [My devices]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: userProfileDevice id
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

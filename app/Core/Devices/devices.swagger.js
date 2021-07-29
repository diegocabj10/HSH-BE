/**
 * @swagger
 *  /devices:
 *    get:
 *      description: Get all devices
 *      tags: [Devices]
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
 *          name: serialNumber
 *          description: Device serial number
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
 *    post:
 *      description: Create new device
 *      tags: [Devices]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - serialNumber
 *                - usageTypeId
 *              properties:
 *                serialNumber:
 *                  type: string
 *                  description: Device serial number.
 *                  example: "AAAAAAAA"
 *                usageTypeId:
 *                  type: integer
 *                  description: Device usage type.
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
 *                  name:
 *                    type: string
 *                    description: Name of device.
 *                    example: Arduino 1
 *                  serialNumber:
 *                    type: string
 *                    description: Name of device.
 *                    example: AAAAAAA
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
 * /devices/{id}:
 *   get:
 *     description: Gets the device with the id
 *     tags: [Devices]
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
 *
 *   put:
 *     description: Updates values on the device with the id
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
 *               - serialNumber
 *               - usageTypeId
 *             properties:
 *               serialNumber:
 *                 type: string
 *                 description: Device serial number.
 *                 example: "ASD"
 *               usageTypeId:
 *                 type: integer
 *                 description: Device usage type.
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
 *     description: Deletes device with the id
 *     tags: [Devices]
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
 *  /devices/expires/{id}:
 *   patch:
 *     description: Expires device with the id, by patching the deletionDate
 *     tags: [Devices]
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

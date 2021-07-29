/**
 * @swagger
 *  /mycontacts:
 *    post:
 *      description: Add new contact
 *      tags: [My contacts]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - deviceId
 *                - contactTypeId
 *              properties:
 *                deviceId:
 *                  type: integer
 *                  description: Identification number of device.
 *                  example: 1
 *                contactTypeId:
 *                  type: integer
 *                  description: Identification number of contact type.
 *                  example: 1
 *                email:
 *                  type: string
 *                  description: The user's contact email.
 *                  example: sollcass98@gmail.com
 *      responses:
 *        200:
 *          description: Added new contact
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
 *  /mycontacts:
 *    get:
 *      description: Get all contacts
 *      tags: [My contacts]
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
 *          name: deviceId
 *          required: true
 *          description: Device id
 *          schema:
 *            type: integer
 *        - in: query
 *          name: name
 *          description: Contact name
 *          schema:
 *            type: string
 *        - in: query
 *          name: lastName
 *          description: Contact last name
 *          schema:
 *            type: string
 *        - in: query
 *          name: email
 *          description: Contact email
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Get all contacts with pagination
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
 *                    description: List of contacts
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
 * /mycontacts/{id}:
 *   get:
 *     description: Gets the contact with the id
 *     tags: [My contacts]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: UserProfileDevice id
 *          schema:
 *            type: integer
 *     responses:
 *        200:
 *          description: Contact data about the id
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
 * @swagger
 * /mycontacts/{id}:
 *   patch:
 *     description: Patches deviceId in UserProfileDevice with the id
 *     tags: [My contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: UserProfileDevice id
 *         schema:
 *           type: integer
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - deviceId
 *              properties:
 *                deviceId:
 *                  type: integer
 *                  description: The device Id.
 *                  example: 1
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

/**
 * @swagger
 *  /events:
 *    post:
 *      description: Create new event
 *      tags: [Events]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - signalId
 *                - serialNumber
 *                - value
 *              properties:
 *                signalId:
 *                  type: integer
 *                  description: Signal identification number.
 *                  example: 2
 *                serialNumber:
 *                  type: string
 *                  description: Device identification number.
 *                  example: AAAA
 *                value:
 *                  type: integer
 *                  description: Signal value.
 *                  example: 100
 *      security: []
 *      responses:
 *        200:
 *          description: New event is created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                required:
 *                  - signalId
 *                  - serialNumber
 *                  - value
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
 *                  id:
 *                    type: integer
 *                    description: Identification number.
 *                    example: 1
 *                  signalId:
 *                    type: integer
 *                    description: Signal identification number.
 *                    example: 2
 *                  serialNumber:
 *                    type: string
 *                    description: Device identification number.
 *                    example: 1
 *                  value:
 *                    type: integer
 *                    description: Signal value.
 *                    example: 100
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
 */
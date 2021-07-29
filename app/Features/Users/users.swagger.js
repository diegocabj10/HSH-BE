/**
 * @swagger
 *  /users:
 *    get:
 *      description: Get all users
 *      tags: [Users]
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
 *          description: User name
 *          schema:
 *            type: string
 *        - in: query
 *          name: lastName
 *          description: User last name
 *          schema:
 *            type: string
 *        - in: query
 *          name: email
 *          description: User email
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: User data about the id
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
 *                    description: List of signals
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          description: Identification number.
 *                          example: 1
 *                        email:
 *                          type: string
 *                          description: The user's email.
 *                          example: diegocampos0909@gmail.com
 *                        password:
 *                          type: string
 *                          description: The user's password.
 *                          example: admin1234
 *                        name:
 *                          type: string
 *                          description: The user's name.
 *                          example: Diego
 *                        lastName:
 *                          type: string
 *                          description: The user's lastName.
 *                          example: Campos
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
 *
 *    post:
 *      description: Create an user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *                - name
 *                - lastName
 *                - phone
 *              properties:
 *                email:
 *                  type: string
 *                  description: The user's email.
 *                  example: diegocampos0909@gmail.com
 *                password:
 *                  type: string
 *                  description: The user's password.
 *                  example: admin1234
 *                name:
 *                  type: string
 *                  description: The user's name.
 *                  example: Diego
 *                lastName:
 *                  type: string
 *                  description: The user's last name.
 *                  example: Campos
 *                phone:
 *                  type: string
 *                  description: The user's phone.
 *                  example: "+5493516159277"
 *      security: []
 *      responses:
 *        200:
 *          description: Successfully user created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    description: Identification number.
 *                    example: 1
 *                  email:
 *                    type: string
 *                    description: The user's email.
 *                    example: diegocampos0909@gmail.com
 *                  password:
 *                    type: string
 *                    description: The user's password.
 *                    example: admin1234
 *                  name:
 *                    type: string
 *                    description: The user's name.
 *                    example: Diego
 *                  lastName:
 *                    type: string
 *                    description: The user's lastName.
 *                    example: Campos
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
 *        406:
 *          description: That user already exists.
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
 *  /users/{id}:
 *    get:
 *      description: Gets the user with the id
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: User id
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: User data about the id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    description: Identification number.
 *                    example: 1
 *                  email:
 *                    type: string
 *                    description: The user's email.
 *                    example: diegocampos0909@gmail.com
 *                  password:
 *                    type: string
 *                    description: The user's password.
 *                    example: admin1234
 *                  name:
 *                    type: string
 *                    description: The user's name.
 *                    example: Diego
 *                  lastName:
 *                    type: string
 *                    description: The user's lastName.
 *                    example: Campos
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
 *    put:
 *      description: Updates values on the user with the id
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: User id
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *                - name
 *                - lastName
 *                - phone
 *              properties:
 *                email:
 *                  type: string
 *                  description: The user's email.
 *                  example: diegocampos0909@gmail.com
 *                password:
 *                  type: string
 *                  description: The user's password.
 *                  example: admin1234
 *                name:
 *                  type: string
 *                  description: The user's name.
 *                  example: Diego
 *                lastName:
 *                  type: string
 *                  description: The user's lastName.
 *                  example: Campos
 *                phone:
 *                  type: string
 *                  description: The user's phone.
 *                  example: "+5493516159277"
 *      responses:
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
 *    delete:
 *      description: Deletes user with the id
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: User id
 *          schema:
 *            type: integer
 *      responses:
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
 *  /users/expires/{id}:
 *   patch:
 *     description: Expires user with the id, by patching the deletionDate
 *     tags: [Users]
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: User id
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

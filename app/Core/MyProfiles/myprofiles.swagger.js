/**
 * @swagger
 *  /myprofiles/listall:
 *    get:
 *      description: Get all myprofiles without pagination in a specific format
 *      tags: [My profiles]
 *      responses:
 *        200:
 *          description: Get a list of myprofiles without pagination
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                description: List of myprofiles
 *                items:
 *                  type: object
 *                  properties:
 *                    profile:
 *                      type: string
 *                      description: Profile name.
 *                      example: Perfil
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

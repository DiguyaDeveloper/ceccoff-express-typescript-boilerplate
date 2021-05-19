/**
 * @swagger
 * definitions:
 *  UserResponse:
 *    type: object
 *    properties:
 *      _id:
 *        type: string
 *      username:
 *        type: string
 */

/**
 * @swagger
 * definitions:
 *  CreateUser:
 *    type: object
 *    properties:
 *      name:
 *        type: string
 *        example: lorem
 *      email:
 *        type: string
 *        example: lorem@ipsun.com
 *      lastname:
 *        type: string
 *        example: lorem
 *      document:
 *        type: string
 *        example: '10553173928'
 *      password:
 *        type: string
 *        example: lorem
 *      termsAndConditions:
 *        type: string
 *        example: '1'
 *      file:
 *        type: string
 *        example: local
 * 		required:
 *      - name
 *      - email
 *      - lastname
 *      - password
 *      - termsAndConditions
 *      - picture
 *      - roleId
 *      - status
 */

/**
 * @swagger
 * definitions:
 *  LoginUser:
 *    type: object
 *    properties:
 *      username:
 *        type: string
 *        example: chnirt
 *      password:
 *        type: string
 *        example: "0"
 * 		required:
 *      - username
 *      - password
 */

/**
 * @swagger
 * definitions:
 *  ErrorResponse:
 *    type: object
 *    properties:
 *      message:
 *        type: string
 *      status:
 *        type: number
 *      property:
 *        type: any
 */

/**
 * @swagger
 * definitions:
 *  ValidateErrorResponse:
 *    type: object
 *    properties:
 *      errors:
 *        type: array
 *        items:
 *            $ref: "#/definitions/UserResponse"
 */

/**
 * @swagger
 * /rangger/usuarios/listar:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *     - users
 *     summary: Get users 👻
 *     description: Ok
 *     consumes:
 *     - application/json
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Get users successful
 *         schema:
 *            type: array
 *            items:
 *                $ref: "#/definitions/UserResponse"
 *       401:
 *         description: Token is invalid
 *         schema:
 *            $ref: "#/definitions/ErrorResponse"
 */

/**
 * @swagger
 * /rangger/usuarios:
 *   delete:
 *     tags:
 *     - users
 *     summary: Delete user 👻
 *     description: Exclusão de usuário
 *     consumes:
 *     - application/json
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: Param
 *       name: Param
 *       description: Update user object
 *       required: true
 *       schema:
 *         $ref: "id"
 *     responses:
 *       201:
 *         description: Updated successful
 *       403:
 *         description: Sem acesso ao usuário
 *         schema:
 *            $ref: "#/definitions/ErrorResponse"
 *       422:
 *         description: Validate Error
 *         schema:
 *            $ref: "#/definitions/ValidateErrorResponse"
 *       500:
 *         description: Error
 *         schema:
 *            $ref: "#/definitions/ErrorResponse"
 */

/**
 * @swagger
 * /rangger/usuarios:
 *   put:
 *     tags:
 *     - users
 *     summary: Update user 👻
 *     description: Alteração de usuário
 *     consumes:
 *     - application/json
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: body
 *       name: body
 *       description: Update user object
 *       required: true
 *       schema:
 *         $ref: "#/definitions/CreateUser"
 *     responses:
 *       201:
 *         description: Updated successful
 *         schema:
 *            $ref: "#/definitions/UserResponse"
 *       403:
 *         description: Sem acesso ao usuário
 *         schema:
 *            $ref: "#/definitions/ErrorResponse"
 *       422:
 *         description: Validate Error
 *         schema:
 *            $ref: "#/definitions/ValidateErrorResponse"
 *       500:
 *         description: Error
 *         schema:
 *            $ref: "#/definitions/ErrorResponse"
 */

/**
 * @swagger
 * /rangger/usuarios:
 *   post:
 *     tags:
 *     - users
 *     summary: Create user 👻
 *     description: Give me the f**king your information to create
 *     consumes:
 *     - application/json
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: body
 *       name: body
 *       description: Created user object
 *       required: true
 *       schema:
 *         $ref: "#/definitions/CreateUser"
 *     responses:
 *       201:
 *         description: Registered successful
 *         schema:
 *            $ref: "#/definitions/UserResponse"
 *       403:
 *         description: Username is existed
 *         schema:
 *            $ref: "#/definitions/ErrorResponse"
 *       422:
 *         description: Validate Error
 *         schema:
 *            $ref: "#/definitions/ValidateErrorResponse"
 *       500:
 *         description: Error
 *         schema:
 *            $ref: "#/definitions/ErrorResponse"
 */

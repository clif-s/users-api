## API Documentation

This sample project will give you a small RESTful API to build your template against. It is built using JavaScript/Node.js (our language of choice), ExpressJS (a small, lightweight web MVC framework) & Mongoose (a MongoDB object modelling library).

**List Users**
----
Returns a list of Users

* **URL**

  `/users`

* **Method:**

  `GET`

*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    [{
      "_id": "57b330de848a005e48f5de94",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "olivia",
        "last": "young"
      },
      "location": {
        "street": "1119 grove road",
        "city": "Mountmellick",
        "state": "rhode island",
        "zip": 88061
      },
      "email": "olivia.young@example.com",
      "username": "crazykoala938",
      "password": "malibu",
      "salt": "78TEnNQ1",
      "md5": "9bebcc9d890f8c9e04c9e40fc1f41476",
      "sha1": "36d6a69cabff0ad780a3dcceb4e94d44edb62fc6",
      "sha256": "9e39c873967f52d67e8d052aad87daf4b63d5464a27de982b64abfe9b208efc8",
      "registered": 1411100094,
      "dob": 818810543,
      "phone": "011-475-1126",
      "cell": "081-725-2254",
      "PPS": "4335321T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "__v": 0
    }, {
      "_id": "57b330de848a005e48f5de95",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "susanne",
        "last": "russell"
      },
      "location": {
        "street": "6896 grafton street",
        "city": "Naas",
        "state": "louisiana",
        "zip": 25003
      },
      "email": "susanne.russell@example.com",
      "username": "ticklishswan833",
      "password": "reader",
      "salt": "Qp38szSx",
      "md5": "57f8e3404f1926bf3fa50c152f037a33",
      "sha1": "43bf7f8fe85e46957cdcb33be61f19dfe9014317",
      "sha256": "c12980f91c86dae1ba9d4d880e8d51645e59f95c6b3d1f28854891d6587b39b5",
      "registered": 1345063087,
      "dob": 481147180,
      "phone": "061-032-9311",
      "cell": "081-609-1066",
      "PPS": "7348900T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/69.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
      },
      "__v": 0
    }]
    ```

* **Error Response:**

* **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```javascript
  { "error": "Error listing users" }
  ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```


**Show User**
----
  Returns JSON data about a single user.

* **URL**

  `/users/:id`

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
      "_id": "57b330de848a005e48f5de94",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "olivia",
        "last": "young"
      },
      "location": {
        "street": "1119 grove road",
        "city": "Mountmellick",
        "state": "rhode island",
        "zip": 88061
      },
      "email": "olivia.young@example.com",
      "username": "crazykoala938",
      "password": "malibu",
      "salt": "78TEnNQ1",
      "md5": "9bebcc9d890f8c9e04c9e40fc1f41476",
      "sha1": "36d6a69cabff0ad780a3dcceb4e94d44edb62fc6",
      "sha256": "9e39c873967f52d67e8d052aad87daf4b63d5464a27de982b64abfe9b208efc8",
      "registered": 1411100094,
      "dob": 818810543,
      "phone": "011-475-1126",
      "cell": "081-725-2254",
      "PPS": "4335321T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "__v": 0
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error reading user" }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```


**Create User**
----
  Creates JSON data about a single user.

* **URL**

  `/users/create`

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   None

* **Data Params**

  ```javascript
  {
    gender: "String",
    name: {
      title: "String",
      first: "String",
      last: "String"
    },
    location: {
      street: "String",
      city: "String",
      state: "String",
      zip: "Number"
    },
    email: "String",
    username: "String",
    password: "String",
    salt: "String",
    md5: "String",
    sha1: "String",
    sha256: "String",
    registered: "Number",
    dob: "Number",
    phone: "String",
    cell: "String",
    PPS: "String",
    picture: {
      large: "String",
      medium: "String",
      thumbnail: "String"
    }
  }
  ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
    gender: "male",
    name: {
      title: "Mr",
      first: "Homer",
      last: "Simpson"
    },
    location: {
      street: "742 Evergreen Terrace",
      city: "Springfield",
      state: "n/a",
      zip: 12345
    },
    email: "homer@simpson.com",
    username: "homersimpson",
    password: "secret",
    salt: "pylI10wj",
    md5: "ddbd6140e188e3bf68ae7ae67345df65",
    sha1: "5472d25c99aa65bbf0368168f65d9770b7cacfe6",
    sha256: "bh0705aec7393e2269d4593f248e649400d4879b2209f11bb2e012628115a4eb",
    registered: 3986717321,
    dob: 821761857,
    phone: "000-111-2222",
    cell: "333-444-555",
    PPS: "1231234T",
    picture: {
      large: "http://image.noelshack.com/fichiers/2013/47/1385035162-dessin-homer.png",
      medium: "https://s-media-cache-ak0.pinimg.com/236x/6a/b6/68/6ab668f8c2341f45c8f2d183bbcc8332.jpg",
      thumbnail: "https://lh3.googleusercontent.com/-ZU-wVKVB6yw/AAAAAAAAAAI/AAAAAAAAABs/sc3eadR2bFE/s120-c/photo.jpg"
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error creating user" }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/create",
    dataType: "json",
    type : "POST",
    success : function(r) {
      console.log(r);
    }
  });
  ```


**Update User**
----
  Updates JSON data about a single user.

* **URL**

  `/users/update/:id`

* **Method:**

  `PUT`

*  **URL Params**

   **Required:**

   None

* **Data Params**

  **Any user attributes, e.g. :**
  ```javascript
  {
    gender: "String",
    name: {
      title: "String",
      first: "String",
      last: "String"
    },
    location: {
      street: "String",
      city: "String",
      state: "String",
      zip: "Number"
    },
    email: "String",
    username: "String",
    password: "String",
    salt: "String",
    md5: "String",
    sha1: "String",
    sha256: "String",
    registered: "Number",
    dob: "Number",
    phone: "String",
    cell: "String",
    PPS: "String",
    picture: {
      large: "String",
      medium: "String",
      thumbnail: "String"
    }
  }
  ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {"User updated"}
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error reading user" }
    ```
  * **Code:** 404 INTERNAL SERVER ERROR <br />
    **Content:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error updating user" }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/update/:id",
    dataType: "json",
    type : "PUT",
    success : function(r) {
      console.log(r);
    }
  });
  ```


**Delete User**
----
  Deletes JSON data about a single user.

* **URL**

  `/users/delete/:id`

* **Method:**

  `DELETE`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {"User deleted"}
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error reading user" }
    ```
  * **Code:** 404 INTERNAL SERVER ERROR <br />
    **Content:**


* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/delete/:id",
    dataType: "json",
    type : "DELETE",
    success : function(r) {
      console.log(r);
    }
  });
  ```

Inspired by https://gist.github.com/iros/3426278

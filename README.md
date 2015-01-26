# StringRenderer
From a JSON Object model (exposed as a service) it can create files/code files

# Usage example

JSON:
JSONObject = {
  [
  "name":"abcd",
  "age":23
  ],
  [
  "name":"efgh",
  "age":24
  ]
};

Script :
<renderFile>
    <div Model="JSONObject">My name is {{name}} and age is {{age}}.
</renderFile>

Rendered File/String :

My name is abcd and age is 23.
My name is efgh and age is 24.


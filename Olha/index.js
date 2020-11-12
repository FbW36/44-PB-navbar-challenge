//* 45-PB-navbar-challenge
//? create function accepts one argument ( passing INPUT data below as argument ) and return the data look like the OUTPUT format below!
// INPUT

const INPUT = [
	{
		"options": [
			{
				"enable": true,
				"key": "693f611f-6f49-47ee-b2bb-f48219157b2f",
				"title": "javascript",
				"value": "javascript",
				"contentType": "docs",
				"type": "complexDropDown",
				"path": "/docs/web-development/javascript",
				"options": [
					{
						"enable": true,
						"key": "4797a180-e17d-455f-9be7-a7ce1446b047",
						"title": "arrays",
						"value": "arrays",
						"contentType": "docs",
						"type": "complexDropDown",
						"path": "/docs/web-development/javascript/arrays"
					}
				]
			},
			{
				"enable": true,
				"key": "ec857ede-e7cc-438b-b184-363e88bbc3d6",
				"title": "frontend",
				"value": "frontend",
				"contentType": "docs",
				"type": "complexDropDown",
				"path": "/docs/web-development/frontend",
				"options": [
					{
						"enable": true,
						"key": "f2df0b9b-439b-443e-b70d-aa6689d2306f",
						"title": "react",
						"value": "react",
						"contentType": "docs",
						"type": "complexDropDown",
						"path": "/docs/web-development/frontend/react"
					}
				]
			}
		],
		"_id": "5f9ed347c0de020db62ace68",
		"enable": false,
		"key": "ea87b377-0ae0-48f5-8faf-8067f22085f3",
		"title": "web development",
		"contentType": "docs",
		"type": "complexDropDown",
		"path": "/docs/web-development",
		"__v": 6
	},
	{
		"options": [
			{
				"enable": true,
				"key": "dbccedc6-64b8-441b-be7e-0e14c68e9204",
				"title": "Programming",
				"value": "programming",
				"contentType": "blogs",
				"type": "complexDropDown",
				"path": "/blogs/blogs/programming",
				"options": [
					{
						"enable": true,
						"key": "d5b67efc-4b18-4a04-8279-48a3fe075e3f",
						"title": "frontend",
						"value": "frontend",
						"contentType": "blogs",
						"type": "complexDropDown",
						"path": "/blogs/blogs/programming/frontend"
					},
					{
						"enable": true,
						"key": "32c0b5d8-bbfe-4491-a72a-cb1a6beae31e",
						"title": "backend",
						"value": "backend",
						"contentType": "blogs",
						"type": "complexDropDown",
						"path": "/blogs/blogs/programming/backend"
					}
				]
			},
			{
				"enable": true,
				"key": "a60c24fb-10c1-4e50-b20c-dbe987136ee7",
				"title": "tec",
				"value": "tec",
				"contentType": "blogs",
				"type": "complexDropDown",
				"path": "/blogs/blogs/tec",
				"options": [
					{
						"enable": true,
						"key": "c2ad99f5-4e87-43f9-998b-3060754f5f6b",
						"title": "laptops",
						"value": "laptops",
						"contentType": "blogs",
						"type": "complexDropDown",
						"path": "/blogs/blogs/tec/laptops"
					}
				]
			}
		],
		"_id": "5f9ed3b3c0de020db62ace69",
		"enable": false,
		"key": "16f90ef8-c752-49b1-9c0f-716aebd4ab0f",
		"title": "blogs",
		"contentType": "blogs",
		"type": "complexDropDown",
		"path": "/blogs/blogs",
		"__v": 5
	},
	{
		"options": [
			{
				"enable": true,
				"key": "eee139e3-8838-4313-bbe6-e1b82eea5e15",
				"title": "laptops",
				"value": "laptops",
				"contentType": "products",
				"type": "complexDropDown",
				"path": "/products/prod/laptops",
				"options": [
					{
						"enable": true,
						"key": "41283d5e-0ecb-461a-8e02-fc5762f76ecc",
						"title": "macbook 16",
						"value": "macbook-16",
						"contentType": "products",
						"type": "complexDropDown",
						"path": "/products/prod/laptops/macbook-16"
					}
				]
			}
		],
		"_id": "5fa66f493a28e563fae84cc8",
		"enable": false,
		"key": "c0c33d97-51e3-4d00-8932-4515e0168a4d",
		"title": "prod",
		"contentType": "products",
		"type": "complexDropDown",
		"path": "/products/prod",
		"__v": 2
	}
];

// in each object, there is a path property which I need to retrieve.
// in many, there is also an 'options' property with an array as its value.
// this array might also consist of objects which also have an 'options' property.


const output = data => {
	const pathsArray = [];

	const findAndPushPaths = arr => {
		for (let obj of arr) {
			if (obj['path']) {
				let path = obj['path'].slice(1).replace(/\//g, '_');
				// console.log(path);
				// let newpath = path.replace(/\//g, '_');
				pathsArray.push(path);
			}
			if (obj['options']) {
				let options = obj['options'];
				findAndPushPaths(options);
			}
		}
	}
	findAndPushPaths(data);

	const outputArray = pathsArray.map(el => {
		return { params : { page : el } };
	})

	return outputArray;
}

const result = output(INPUT);
console.log(result);

// ----------------------------################---------------------------
// OUTPUT

//   [
//   { params: { page: 'docs_web-development' } },
//   { params: { page: 'docs_web-development_javascript' } },
//   { params: { page: 'docs_web-development_javascript_arrays' } },
//   { params: { page: 'docs_web-development_frontend' } },
//   { params: { page: 'docs_web-development_frontend_react' } },
//   { params: { page: 'blogs_blogs' } },
//   { params: { page: 'blogs_blogs_programming' } },
//   { params: { page: 'blogs_blogs_programming_frontend' } },
//   { params: { page: 'blogs_blogs_programming_backend' } },
//   { params: { page: 'blogs_blogs_tec' } },
//   { params: { page: 'blogs_blogs_tec_laptops' } },
//   { params: { page: 'products_prod' } },
//   { params: { page: 'products_prod_laptops' } },
//   { params: { page: 'products_prod_laptops_macbook-16' } }
// ]

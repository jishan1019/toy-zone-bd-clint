import React from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";

const Blog = () => {
  useDynamicTitle("Toy Zone | Blog");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mr-8 ml-8 mb-8 ">
      <div className="card w-full h-[32rem] bg-base-100 shadow-md">
        <figure>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220401174334/Screenshot20220401174003.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p>
            1. Access Token: An access token is a credential that is issued by
            an authentication server to a client application after successful
            authentication. <br /> <br />
            2.Refresh Token: A refresh token is also issued by the
            authentication server and is used to obtain a new access token when
            the current one expires.
            <br />
            <br />
            Generally we store it on HTTP-only Cookie or Local Storage.
          </p>
        </div>
      </div>

      <div className="card w-full h-[32rem] bg-base-100 shadow-md">
        <figure>
          <img
            src="https://tomaztsql.files.wordpress.com/2022/02/screenshot-2022-02-13-at-20.38.39.png?w=1024"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
          <p>
            Sql and NoSql Database are deffrent formate of database to cary
            data. <br />
            Where SQL databases are vertically scalable, while NoSQL databases
            are horizontally scalable. SQL databases are table-based, while
            NoSQL databases are document, key-value, graph, or wide-column
            stores.
          </p>
        </div>
      </div>

      <div className="card w-full h-[32rem] bg-base-100 shadow-md">
        <figure>
          <img
            src="https://s3-eu-west-1.amazonaws.com/blog.forestadmin.com/2022/07/NestJS-vs-ExpressJS@2x.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">What is express js? What is Nest JS?</h2>
          <p>
            Express is a minimalist and flexible framework that is easy to use
            and has a large community of developers. NestJS, on the other hand,
            is a newer framework that provides additional features such as
            dependency injection, a modular architecture, and an intuitive CLI.
          </p>
        </div>
      </div>

      <div className="card w-full h-[32rem] bg-base-100 shadow-md">
        <figure>
          <img
            src="https://studio3t.com/wp-content/uploads/2018/10/Mongodb.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p>
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages in a pipeline can filter, sort, group, reshape and modify
            documents that pass through the pipeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

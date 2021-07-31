  import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO-8601 encoded date string. */
  Date: any;
  /** An ISO-8601 encoded UTC date string. */
  DateTime: any;
  /** A Git object ID. */
  GitObjectID: any;
  /** Git SSH string */
  GitSSHRemote: any;
  /** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
  GitTimestamp: any;
  /** A string containing HTML code. */
  HTML: any;
  /** An ISO-8601 encoded UTC date string with millisecond precision. */
  PreciseDateTime: any;
  /** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
  URI: any;
  /** A valid x509 certificate string */
  X509Certificate: any;
};
/** Represents a given language found in repositories. */
export type Language = Node & {
  __typename?: 'Language';

  /** The name of the current language. */
  name: Scalars['String'];
};
/** A list of languages associated with the parent. */
export type LanguageConnection = {
  __typename?: 'LanguageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LanguageEdge>>>;
};
/** Represents the language of a repository. */
export type LanguageEdge = {
  __typename?: 'LanguageEdge';

  node: Language;
  
};

/** The query root of GitHub's GraphQL interface. */
export type Query = {
  __typename?: 'Query';
 
  search: SearchResultItemConnection;
  
};
export type RepositoryqueryQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  query: Scalars['String'];
}>;

export type UserqueryQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  query: Scalars['String'];
}>;
/** A repository contains the content for a project. */
export type Repository =  {
  __typename?: 'Repository';
  /** A list of users that can be assigned to issues in this repository. */
  createdAt: Scalars['DateTime'];

  /** The Ref associated with the repository's default branch. */
  description?: Maybe<Scalars['String']>;
 
 
  /** The repository's URL. */
  homepageUrl?: Maybe<Scalars['URI']>;
  id: Scalars['ID'];
  
  /** A list containing a breakdown of the language composition of the repository. */
  languages?: Maybe<LanguageConnection>;
  
  /** The name of the repository. */
  name: Scalars['String'];
  /** The repository's name with owner. */
  nameWithOwner: Scalars['String'];


  /** The User owner of the repository. */
  owner: RepositoryOwner;
 
  
  /** The HTTP URL listing the repository's projects */
  projectsUrl: Scalars['URI'];
 
  /** Identifies when the repository was last pushed to. */
  pushedAt?: Maybe<Scalars['DateTime']>;

  
  /** Returns a count of how many stargazers there are on this object */
  stargazerCount: Scalars['Int'];
 
  /** Returns a list of all submodules in this repository parsed from the .gitmodules file as of the default branch's HEAD commit. */

  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The HTTP URL for this repository */
  url: Scalars['URI'];

};

/** Represents an owner of a Repository. */
export type RepositoryOwner = {

  /** The HTTP URL for the owner. */
  url: Scalars['URI'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};



/** The results of a search. */
export type SearchResultItem = Repository | User;

/** A list of results that matched against a search query. */
export type SearchResultItemConnection = {
 
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SearchResultItemEdge>>>;
   repositoryCount: Scalars['Int'];
   userCount: Scalars['Int'];
   pageInfo:  PageInfo;
 
};


/** An edge in a connection. */
export type SearchResultItemEdge = {
  
  /** The item at the end of the edge. */
  node?: Maybe<SearchResultItem>;
 
};
export type User = {
  __typename?: 'User';
 
  /** A URL pointing to the user's public avatar. */
  avatarUrl: Scalars['URI'];
  /** The user's public profile bio. */
  bio?: Maybe<Scalars['String']>;
  
  /** The user's public profile company as HTML. */
  
  createdAt: Scalars['DateTime'];

  /** The user's publicly visible profile email. */
  email: Scalars['String'];
 
  id: Scalars['ID'];
  
  /** The user's public profile location. */
  location?: Maybe<Scalars['String']>;
  
  name?: Maybe<Scalars['String']>;
  /** Find an organization by its login that the user belongs to. */
 
  projectsUrl: Scalars['URI'];
  /** A list of public keys associated with this user. */
 
  repositories: RepositoryConnection;
  
  /** Find Repository. */
  repository?: Maybe<Repository>;

  /** The user's description of what they're currently doing. */
  updatedAt: Scalars['DateTime'];
  /** The HTTP URL for this user */
  url: Scalars['URI'];

  
  /** A URL pointing to the user's public website/blog. */
  websiteUrl?: Maybe<Scalars['URI']>;
};
export type RepositoryConnection = {
  __typename?: 'RepositoryConnection';
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
  
};
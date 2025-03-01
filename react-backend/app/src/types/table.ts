import React from 'react';

export type ActionTypes = 'info' | 'update' | 'delete';
export type TableRows = UserData[] | CategoryDataProps[] | NewsDataProps[] | ArticleDataProps[] | ApiResponseDataProps[] | DownloadDataProps[];
import {CategoryTypes} from 'src/types'

export type UserData = {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	phone: string;
	role: string;
	name: string;
};

export type CategoryDataProps = {
	id: number;
	type: CategoryTypes;
	name: string;
	sort: number;
};

export type NewsDataProps = {
	id: number;
  title: string;
  publishedDate: string;
  description: string;
  category: string;
  Category: {
    name: string;
  }
};

export type ArticleDataProps = {
	id: number;
	title: string;
  description: string;
  publishedDate: string;
  author: string;
  category: string;
  Category: {
    name: string;
  }
};

export type DownloadFileDataProps = {
  url: string,
  type: string,
}

export type DownloadDataProps = {
	id: number;
	title: string;
  description: string;
  files: string | React.ReactNode;
  category: string;
  Category: {
    name: string;
  },
  DownloadFiles: DownloadFileDataProps[]
};

export type ApiResponseDataProps = {
	id: number;
	title: string;
  content: string;
};

export type NewsListProps = {
	rows: NewsDataProps[];
	count: number;
};

export type ArticleListProps = {
	rows: ArticleDataProps[];
	count: number;
};

export type DownloadListProps = {
	rows: DownloadDataProps[];
	count: number;
};

export type ApiResponseListProps = {
	rows: ApiResponseDataProps[];
	count: number;
};

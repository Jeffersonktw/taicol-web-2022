

// ** MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

// ** Article Form Imports
import ArticleSaveForm from 'src/form/article/ArticleSaveForm';

const SaveNewsPage = () => {
	return (
		<Card>
			<CardHeader title="Article Create" />
			<CardContent sx={{ py: 2 }}></CardContent>
			<ArticleSaveForm />
		</Card>
	);
};

export default SaveNewsPage;

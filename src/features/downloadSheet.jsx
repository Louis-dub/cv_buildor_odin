import { Document, Page, View, Text, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

export default function DownloadSheet() {
    const styles = StyleSheet.create({
        page: {
            padding: 30,
            backgroundColor: "#f8f8f8",
            border: "1px solid #e0e0e0",
            borderRadius: 2,
        },
        title: {
            fontSize: 24,
            marginBottom: 20,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        subtitle: {
            fontSize: 16,
            marginBottom: 10,
            textAlign: 'center',
        },
        text: {
            fontSize: 12,
            marginBottom: 5,
        },
    });

    return (
        <PDFDownloadLink
            document={
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View>
                            <Text style={styles.title}>Mon premier PDF avec React</Text>
                            <Text style={styles.subtitle}>Créé par Louis Dubois</Text>
                            <Text style={styles.text}>Bonjour !</Text>
                            <Text style={styles.text}>Ceci est un exemple de PDF généré avec react-pdf.</Text>
                            <Text style={styles.text}>Tu peux ajouter du texte, des images, des tableaux, etc.</Text>
                        </View>
                    </Page>
                </Document>
            }
            fileName="cv.pdf"
        >
        </PDFDownloadLink>
    );
}

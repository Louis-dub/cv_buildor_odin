import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export default function CvSheet() {
    const styles = StyleSheet.create({
        page: {
            padding: 30,
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        },
        header: {
            display: 'flex',
            flexDirection: 'column',
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
    );
}

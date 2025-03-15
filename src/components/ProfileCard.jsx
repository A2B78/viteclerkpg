// src/ProfileCard.tsx
import { useUser } from '@clerk/clerk-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const ProfileCard = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn || !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Chargement...</span>
      </div>
    );
  }

  const {
    id,
    fullName,
    username,
    primaryEmailAddress,
    phoneNumbers,
    imageUrl,
    publicMetadata,
    createdAt,
    updatedAt,
  } = user;

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">
            👋 Bonjour, {fullName || username || 'Utilisateur'} !
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="avatar"
                className="w-16 h-16 rounded-full border shadow"
              />
            )}
            <div>
              <p>
                <strong>Nom complet :</strong> {fullName || 'N/A'}
              </p>
              <p>
                <strong>Username :</strong> {username || 'N/A'}
              </p>
              <p>
                <strong>Email :</strong> {primaryEmailAddress?.emailAddress || 'N/A'}
              </p>
              {phoneNumbers.length > 0 && (
                <p>
                  <strong>Téléphone :</strong> {phoneNumbers[0].phoneNumber}
                </p>
              )}
            </div>
          </div>

          <div className="border-t pt-4">
            <p>
              <strong>ID Clerk :</strong> {id}
            </p>
            <p>
              <strong>Rôle (metadata) :</strong>{' '}
              {publicMetadata?.role || 'non défini'}
            </p>
            <p>
              <strong>Compte créé le :</strong>{' '}
              {new Date(createdAt).toLocaleDateString()}
            </p>
            <p>
              <strong>Dernière mise à jour :</strong>{' '}
              {new Date(updatedAt).toLocaleDateString()}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;

// Import the DateForm component from the shared components directory.
import DateForm from '@/components/shared/DateForm';

// Define the default exported function for this route (index route).
export default async function IndexFile() {
  // The function returns the DateForm component that will be rendered when the route is accessed.
  return <DateForm />;
}

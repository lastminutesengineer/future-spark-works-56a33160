-- Add explicit deny policy for public access to profiles table
-- This prevents unauthorized enumeration of user PII (emails, phone numbers)

CREATE POLICY "block_public_access_profiles"
ON public.profiles
FOR SELECT
TO anon
USING (false);

-- Ensure the existing user-specific policies remain in effect
-- The authenticated user policies will still work as they have higher specificity
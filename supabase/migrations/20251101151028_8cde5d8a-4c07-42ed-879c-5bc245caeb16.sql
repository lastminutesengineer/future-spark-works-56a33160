-- Remove JWT verification bypass for chat function (if exists)
-- This ensures the chat function requires authentication
-- The default behavior is verify_jwt = true, so we're documenting this explicitly

-- Note: Since supabase/config.toml doesn't show [functions.chat] section with verify_jwt=false,
-- JWT verification is already enabled by default. This migration serves as documentation.

-- Add a comment to the newsletter_subscribers table for clarity
COMMENT ON COLUMN public.newsletter_subscribers.email IS 'Email address validated via regex constraint and Zod on client side';

CREATE OR REPLACE FUNCTION update_modified_column()   
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;   
END;
$$ language 'plpgsql';

CREATE TRIGGER update_quotes_modtime BEFORE UPDATE ON QUOTES FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_news_modtime BEFORE UPDATE ON NEWS FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
